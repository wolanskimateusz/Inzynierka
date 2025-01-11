﻿using Microsoft.AspNetCore.Identity;

namespace api.Models
{

    public class AppUser : IdentityUser
    {
         public List<Ticket?> Tickets { get; set; } = new List<Ticket?>();
    }
}
 