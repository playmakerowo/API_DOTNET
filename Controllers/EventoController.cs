using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.MySql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EventoController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public EventoController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        //Metodo para agregar un evento desde la API
        [HttpPost]
        public async Task<IActionResult> AddEvento(Evento evento)
        {
            _appDbContext.Eventos.Add(evento);
            await _appDbContext.SaveChangesAsync();

            return Ok(evento);
        }

        //Metodo para listar todos los eventos
        [HttpGet]
        public async Task<IActionResult> getEventos()
        {
            var eventos = await _appDbContext.Eventos.ToListAsync();

            return Ok(eventos);
        }

        //Metodo para obtener los eventos por su id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvento(int id)
        {
            var evento = await _appDbContext.Eventos.FindAsync(id);

            return Ok(evento);
        }

    }

}
