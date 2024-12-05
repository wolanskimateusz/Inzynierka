using api.Dtos.Event;
using api.Models;

namespace api.Interfaces
{
    public interface IEventRepository
    {

        Task<List<Event>> GetAllAsync();
        Task<Event?> GetByIdAsync(int id);
        Task<Event> CreateAsync(Event eventModel);
        Task<Event?> UpdateAsync(int id, UpdateEventDto eventDto);
        Task<Event?> DeleteAsync(int id);
        Task<List<Event>?> GetLatestAsync();

    
       
    }
}
