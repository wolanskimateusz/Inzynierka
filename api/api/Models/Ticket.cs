﻿using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Tickets")]
    public class Ticket
    {
        public int Id { get; set; }
        public string Type { get; set; } = string.Empty;
        [Column(TypeName = "decimal(10,2)")]
        public decimal price { get; set; }

        public Event? Event { get; set; }
        public int? EventId { get; set; }
    }
}