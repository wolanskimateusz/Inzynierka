using api.Data;
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
        public EventController(IEventRepository eventRepo)
        {
            _eventRepo = eventRepo;
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

       
    }
}
