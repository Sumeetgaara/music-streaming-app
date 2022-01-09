using Microsoft.AspNetCore.SignalR;

namespace real_time_music_api.Hubs
{
    public class MusicHub : Hub
    {
        public async Task StartMusic(string link)
        {
            await Clients.All.SendAsync("StartMusic",link);
        }
    }
}
