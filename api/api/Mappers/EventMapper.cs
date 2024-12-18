﻿using api.Dtos.Event;
using api.Models;
using System.Runtime.CompilerServices;

namespace api.Mappers
{
    public static class EventMapper
    {
        public static Event ToEventFromCreateDto(this CreateEventDto eventDto)
        {
            return new Event
            {
                Name = eventDto.Name,
                Descripton = eventDto.Descripton,
                Date = eventDto.Date,
                Localization = eventDto.Localization
            };

        }

        public static EventDto ToEventDto(this Event eventModel)
        {
            return new EventDto
            {
                Id = eventModel.Id,
                Name = eventModel.Name,
                Descripton = eventModel.Descripton,
                Date = eventModel.Date,
                Localization = eventModel.Localization
            };
        }
    }
}
