﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Artists")]
    public class Artist
    {

        public int Id {  get; set; }
        public string Name { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;

        public Event? Event { get; set; }
        public int? EventId { get; set; }

    }
}