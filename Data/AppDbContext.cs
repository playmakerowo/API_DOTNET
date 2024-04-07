using Microsoft.EntityFrameworkCore;

public class AppDbContext:DbContext{
    public AppDbContext(DbContextOptions options):base(options)
    {
     
    }

    public DbSet<Evento> Eventos {get; set;}
    public DbSet<Invitacion> Invitaciones {get; set;}
}