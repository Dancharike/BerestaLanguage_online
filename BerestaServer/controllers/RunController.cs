using System.Runtime.InteropServices;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace BerestaServer.controllers;

[ApiController]
[Route("api/[controller]")]
public class RunController : ControllerBase
{
    [DllImport("libBerestaCore.dll", CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi, EntryPoint = "run_script")]
    private static extern IntPtr RunScript(string code);

    public record RunRequest(string code);
    public record RunResult(string Stdout, string Stderr, bool Success);

    [HttpPost]
    public IActionResult Execute([FromBody] RunRequest request)
    {
        if(string.IsNullOrWhiteSpace(request.code)) { return BadRequest(new { error = "Code cannot be empty!" }); }

        try
        {
            string currentDir = Directory.GetCurrentDirectory();
            Console.WriteLine($"[DEBUG] Working directory: {currentDir}");

            IntPtr ptr = RunScript(request.code);
            string json = Marshal.PtrToStringAnsi(ptr) ?? "{}";

            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var result = JsonSerializer.Deserialize<RunResult>(json, options);

            return Ok(result ?? new RunResult("", "Invalid response format", false));
        }
        catch (DllNotFoundException e)
        {
            return StatusCode(500, new RunResult("", $"DLL not found: {e.Message}", false));
        }
        catch (EntryPointNotFoundException e)
        {
            return StatusCode(500, new RunResult("", $"Entry point not found: {e.Message}", false));
        }
        catch (Exception e)
        {
            return StatusCode(500, new RunResult("", e.Message, false));
        }
    }
}
