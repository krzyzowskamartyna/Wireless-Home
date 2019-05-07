using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WirelessHome.Models
{
    public class DeviceDetailContext:DbContext
    {
        public DeviceDetailContext(DbContextOptions<DeviceDetailContext> options) : base(options)
        {
        }

        public DbSet<DeviceDetail> DeviceDetail { get; set; }
    }
}
