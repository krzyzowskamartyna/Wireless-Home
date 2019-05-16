using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WirelessHome.Models;
using System.Net.NetworkInformation;
using System.Text;

namespace WirelessHome.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceDetailController : ControllerBase
    {
        private readonly DeviceDetailContext _context;

        public DeviceDetailController(DeviceDetailContext context)
        {
            _context = context;
        }

        // GET: api/DeviceDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeviceDetail>>> GetDeviceDetail()
        {
            return await _context.DeviceDetail.ToListAsync();
        }

        // GET: api/DeviceDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeviceDetail>> GetDeviceDetail(int id)
        {
            var deviceDetail = await _context.DeviceDetail.FindAsync(id);

            if (deviceDetail == null)
            {
                return NotFound();
            }

            return deviceDetail;
        }
        
        // PUT: api/DeviceDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeviceDetail(int id, DeviceDetail deviceDetail)
        {
            if (id != deviceDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(deviceDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeviceDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DeviceDetail
        [HttpPost]
        public async Task<ActionResult<DeviceDetail>> PostDeviceDetail(DeviceDetail deviceDetail)
        {
            if ((deviceDetail.Ip).Split(new char[] { '.' }, StringSplitOptions.RemoveEmptyEntries).Length == 4)
            {
                Ping pingSender = new Ping();

                string data = "testping";
                byte[] buffer = Encoding.ASCII.GetBytes(data);

                int timeout = 10000;

                PingOptions options = new PingOptions(64, true);

                PingReply reply = pingSender.Send(deviceDetail.Ip, timeout, buffer, options);
                IPAddress ipAddr;
                if (IPAddress.TryParse(deviceDetail.Ip, out ipAddr) && reply.Status == IPStatus.Success)
                {

                    _context.DeviceDetail.Add(deviceDetail);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetDeviceDetail", new { id = deviceDetail.Id }, deviceDetail);
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                Console.WriteLine("error");
                return BadRequest();
            }       
        }

        // DELETE: api/DeviceDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DeviceDetail>> DeleteDeviceDetail(int id)
        {
            var deviceDetail = await _context.DeviceDetail.FindAsync(id);
            if (deviceDetail == null)
            {
                return NotFound();
            }

            _context.DeviceDetail.Remove(deviceDetail);
            await _context.SaveChangesAsync();

            return deviceDetail;
        }

        private bool DeviceDetailExists(int id)
        {
            return _context.DeviceDetail.Any(e => e.Id == id);
        }
  }
        

    
}
