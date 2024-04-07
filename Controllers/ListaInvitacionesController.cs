using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using proyecto_invitaciones.Models;

namespace proyecto_invitaciones.Controllers
{
    [Route("ListaInvitaciones")]
    public class ListaInvitacionesController : Controller
    {
        private readonly ILogger<ListaInvitacionesController> _logger;

        public ListaInvitacionesController(ILogger<ListaInvitacionesController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            // Renderizar la vista Home/ListaInvitaciones.cshtml
            return View("~/Views/Home/ListaInvitaciones.cshtml");
        }

        // Método de acción para manejar errores
        [Route("Error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
