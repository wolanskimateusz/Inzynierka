using api.Data;
using api.Dtos.Artist;
using api.Dtos.Event;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/event")]
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _eventRepo;
        private readonly IArtistRepository _artistRepo;
        public EventController(IEventRepository eventRepo, IArtistRepository artistRepo)
        {
            _eventRepo = eventRepo;
            _artistRepo = artistRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _eventRepo.GetAllAsync();
           
            var eventDto = result.Select(x => x.ToEventDto()).ToList();

            return Ok(eventDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _eventRepo.GetByIdAsync(id);
            if (result == null) return NotFound();
            return Ok(result.ToEventDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateEventDto eventDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var eventModel = eventDto.ToEventFromCreateDto();

            await _eventRepo.CreateAsync(eventModel);

            return CreatedAtAction(nameof(GetById), new { id = eventModel.Id }, eventModel.ToEventDto());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateEventDto eventDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _eventRepo.UpdateAsync(id, eventDto);
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _eventRepo.DeleteAsync(id);
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpGet("latest")]
        public async Task<IActionResult> GetLatest()
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _eventRepo.GetLatestAsync();
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpPut("artist")]
        public async Task<IActionResult> AddArtist(int artistId, int eventId)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var result = await _eventRepo.AddArtistToEventAsync(eventId, artistId);

            if (result == null) return BadRequest(result);

            return Ok(result);
        }


        [HttpPut("artistnew")]
        public async Task<IActionResult> AddNewArtist([FromBody] CreateArtistDto artist, int eventId)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var newArtist = await _artistRepo.CreateAsync(artist.ToArtistFromCreateDto());

            if (newArtist == null) return BadRequest(newArtist);

            var result = await _eventRepo.AddArtistToEventAsync(eventId, newArtist.Id);

            if (result == null) return BadRequest(result);

            return Ok(result);
        }


        [HttpDelete("artist")]
        public async Task<IActionResult> DeleteArtist(int eventId, int artistId)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await _eventRepo.DeleteArtistFromEventAsync(eventId, artistId);

            if (result == null) return NotFound();

            return Ok(result);
        }
        
    }
}
