using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WirelessHome.Models
{
    public class DeviceDetail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar(16)")]
        public string Ip { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Room { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string DeviceType { get; set; }
        [Required]
        [Column(TypeName = "varchar(16)")]
        public string MqttTopics { get; set; }
    }
}
