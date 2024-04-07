using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using proyecto_invitaciones.Models;

namespace proyecto_invitaciones.Controllers
{
    [Route("Confirmacion")]
    public class ConfirmacionController : Controller
    {
        private readonly ILogger<ConfirmacionController> _logger;

        public ConfirmacionController(ILogger<ConfirmacionController> logger)
        {
            _logger = logger;
        }

        // Método de acción para mostrar la vista Confirmacion.cshtml
        [Route("{*id}")]
        public IActionResult Index()
        {
            return View("/Views/Home/Confirmacion.cshtml");
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
