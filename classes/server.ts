import express from 'express';

export default class Server {

    public app: express.Application;
    // public port: number = 3000;
    // public port: any = process.env.PORT || 3000;

    constructor() {
        this.app = express();
    }
 
    start( callback: Function ) {
        // this.app.listen( this.port );
        this.app.listen( process.env.PORT || 3000 );
    // sino and
    //    this.app.listen( this.port, callback );        
    }
}

