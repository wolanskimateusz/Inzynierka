using api.Dtos.Artist;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    [ApiController]
    [Route("api/artist")]
    public class ArtistController : ControllerBase
    {
        private readonly IArtistRepository _artistRepo;
        public ArtistController(IArtistRepository aristRepo)
        {
            _artistRepo = aristRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await _artistRepo.GetAllAsync();

            var artistDto = result.Select(x => x.ToArtistDto()).ToList();

            return Ok(artistDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute]int id)
        {
            if(!ModelState.IsValid) return BadRequest(ModelState);

            var result = await _artistRepo.GetByIdAsync(id);
            if(result == null) return NotFound();

            return Ok(result.ToArtistDto());  
        }

        [HttpPost]
        public async Task<IActionResult> CreateArtist([FromBody] CreateArtistDto artistDto)
        {

        }
    }
}
