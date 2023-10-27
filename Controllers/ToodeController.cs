using BackendValkrusman.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackendValkrusman.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ToodeController : ControllerBase
    {
        private static Toode _toode = new Toode(1, "Koola", 1.5, true);

        // GET: toode
        [HttpGet]
        public Toode GetToode()
        {
            return _toode;
        }

        // GET: toode/suurenda-hinda
        [HttpGet("suurenda-hinda")]
        public Toode SuurendaHinda()
        {
            _toode.Price = _toode.Price + 1;
            return _toode;
        }
        // GET: toode/MuudabToote
        [HttpGet("active")]
        public Toode MuudaToode()
        {
         
            if (_toode.IsActive==true)
            {
                _toode.IsActive= false;
            }
            else
            {
                _toode.IsActive = true;
            }
            return _toode;
        }


        // GET: toode/muudab-nime
        [HttpGet("newname/{name}")]
        public Toode MuudaNime(string nimi)
        { 
            _toode.Name = nimi;
            return _toode;
        }
        // GET: toode/muudab-nime
        [HttpGet("newprice/{price}")]
        public Toode Muudahinda(int korrutis)
        {
            _toode.Price *= korrutis;
            return _toode;
        }
    }
}
