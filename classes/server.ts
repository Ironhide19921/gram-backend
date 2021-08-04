import express from 'express';

export default class Server {

    public app: express.Application;
    // public port: number = 3000;
    public port: any = process.env.PORT;

    constructor() {
        this.app = express();
    }
 
    start( callback: Function ) {
        this.app.listen( this.port );
    // sino and
    //    this.app.listen( this.port, callback );        
    }
}

