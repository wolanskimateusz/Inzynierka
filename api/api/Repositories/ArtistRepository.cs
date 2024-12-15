using api.Data;
using api.Dtos.Artist;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ArtistRepository : IArtistRepository
    {
        private readonly AppDbContext _context;
        public ArtistRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Artist> CreateAsync(Artist artistModel)
        {
            await _context.AddAsync(artistModel);
            await _context.SaveChangesAsync();

            return artistModel;
        }

        public async Task<Artist> DeleteAsync(int id)
        {
            var result = await _context.Artists.FirstOrDefaultAsync(x => x.Id == id);
            if (result == null) return null;

            _context.Artists.Remove(result);
            await _context.SaveChangesAsync();
            return result;

        }

        public Task<List<Artist?>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Artist?> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Artist> UpdateAsync(int id, UpdateArtistDto artistDto)
        {
            throw new NotImplementedException();
        }
    }
}
