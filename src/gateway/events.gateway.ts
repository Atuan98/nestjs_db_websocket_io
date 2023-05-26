import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, 
    WsResponse, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect} from "@nestjs/websockets";
import { Server } from "socket.io";
const pkg = require('../../../package.json');


@WebSocketGateway({
    cors:{
        origin: '*',
    },
})

export class EventsGateWay implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server:Server;

    private  readonly timestamp = Date.now();
    
    afterInit(server: any) {
        console.log("--------------------------------Init------------------------------")
    }

    @SubscribeMessage('events')
    onHeartbeat(client: any, data: any): WsResponse<string> {
        console.log(data);
        const event = 'events';
        const response = `events-${pkg.version}-${this.timestamp}`;
        return { event, data: response };
    }

    @SubscribeMessage('events2')
    onEvents2(@MessageBody() data: any): WsResponse<string> {
        console.log(data);
        this.server.emit('onMessage',{
            msg: 'New message',
            content: data
        })
        return
    }
    
    handleConnection(client: any, ...args: any[]): any {
        console.log(`connected... id: ${client.id}`);
    }

    @SubscribeMessage('identity')
    async identity(@MessageBody() data: any): Promise<any>{
        console.log(data)
    }

    handleDisconnect(client: any) {
        console.log(`User disconnected with socket.id: ${client.id}`)
    }
}