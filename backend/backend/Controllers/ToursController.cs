using backend.Data;
using backend.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToursController : ControllerBase
    {
        private readonly TourismDbContext _context;
        public ToursController(TourismDbContext context)
        {
            _context = context;
        }

        [HttpGet("get-tours")]
        public async Task<List<Tour>> GetTours()
        {
            var tours = await _context.Tours.ToListAsync();
            return tours;
        }   

    }
}
