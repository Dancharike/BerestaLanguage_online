namespace BerestaServer;

class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowFrontend", policy =>
            {
                policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
            });
        });
        
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        
        var app = builder.Build();
        app.UseCors("AllowFrontend");
        app.UseSwagger();
        app.UseSwaggerUI(options => 
        {
            options.DocumentTitle = "BerestaServer API";
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "BerestaServer API v1");
        });
        
        app.MapGet("/", () => "BerestaServer is running!");
        app.MapControllers();
        app.Run();
    }
}
