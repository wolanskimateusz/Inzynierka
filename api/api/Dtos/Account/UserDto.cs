namespace api.Dtos.Account
{
    using api.Models;

    public class UserDto
    {
        public List<string> Tickets { get; set; } = new List<string>();
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    } 
}
