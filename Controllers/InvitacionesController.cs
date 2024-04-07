using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.MySql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class InvitacionesController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public InvitacionesController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        // generar una invitacion
        [HttpPost]
        public async Task<IActionResult> AddInvitacion(Invitacion invitado)
        {
            _appDbContext.Invitaciones.Add(invitado);
            await _appDbContext.SaveChangesAsync();

            return Ok(invitado);
        }

        // obtener todas las invitaciones
        [HttpGet]
        public async Task<IActionResult> getInvitados()
        {
            var invitados = await _appDbContext.Invitaciones.ToListAsync();

            return Ok(invitados);
        }

        // buscar la invitacion
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvitacion(int id)
        {
            var invitacion = await _appDbContext.Invitaciones.FindAsync(id);

            return Ok(invitacion);
        }

        // actualizar la invitacion
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInvitacion(int id, Invitacion invitacion)
        {
            try
            {
                // Buscar la invitación por su ID
                var invitacionExistente = await _appDbContext.Invitaciones.FindAsync(id);

                if (invitacionExistente == null)
                {
                    return NotFound(); // Invitación no encontrada
                }

                // Actualizar los campos de la invitación existente con los valores proporcionados
                invitacionExistente.Aceptada = invitacion.Aceptada;

                // Guardar los cambios en la base de datos
                await _appDbContext.SaveChangesAsync();

                return Ok(); // Operación exitosa
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al actualizar la invitación: {ex.Message}");
            }
        }

    }

}
