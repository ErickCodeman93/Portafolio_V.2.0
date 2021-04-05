import fs from "fs";
import transporter from "../Mail/Config"
import handlebars from "handlebars";

const send = async ( name: string, email: string, tel: string, message: string, idiom: string  ) => {
    
    try {

        const appRoot = process.cwd();

        const data = {
            name,
            email,
            tel,
            message,
        }

        const templateThanks = idiom === 'es' ? "/templates/es/thanks.html" : "/templates/en/thanks.html";
        const templateContact = idiom === 'es' ? "/templates/es/contact.html" : "/templates/en/contact.html";

        await Promise.all( [
            readHTMLFile( appRoot + templateThanks, data, true, idiom ),
            readHTMLFile( appRoot + templateContact, data, false, idiom ),
        ] );

        
    } //end try 
    catch ( error ) {
        throw new Error( error.toString() );
    } //end catch

} //end function

const processMail = ( mailConfig: any ) => {

    return new Promise( ( resolve, reject ) => {

        transporter.sendMail( mailConfig, ( error, response ) => {

            error ? reject( error ) : resolve( true );
            transporter.close();
       } );

    } );
} //end function

const readHTMLFile = ( path: string, data: any, isClient: boolean, idiom:string ) => {

    const {  name, email, tel, message } = data;

    return new Promise( ( resolve, reject ) => {

        try {
            
            fs.readFile( path, { encoding: 'utf-8' }, async ( err: any, html: any ) => {
        
                const template = handlebars.compile( html );
                let replacements = {};

                if( isClient )
                    replacements = {
                        name
                    };
                else
                    replacements = {
                        name,
                        email,
                        tel,
                        message,
                    };
                    
        
                const htmlToSend = template( replacements );
                
                let mailConfig = {};

                if( idiom === 'es' )
                    //make mailable object
                    mailConfig = {
                        from: 'erickalvacontact@gmail.com',
                        to: isClient ? email : 'erickalvacontact@gmail.com',
                        subject: isClient ? 'Gracias por ponerte en contacto!!!' : 'Tienes un nuevo mensaje de contacto de tu sitio web!!!',
                        html : htmlToSend
                    }
                else    
                    mailConfig = {
                        from: 'erickalvacontact@gmail.com',
                        to: isClient ? email : 'erickalvacontact@gmail.com',
                        subject: isClient ? 'Thanks for getting in contact with me !!!' : 'Someone wants to contact you from your web site',
                        html : htmlToSend
                    }
        
                const response: any = await processMail( mailConfig );
        
                if( ! response )
                    throw new Error( response.toString() );

                resolve( true );

            } );

        } //end try 
        catch ( error ) {
            reject( error.toString() )
        } //end catch

    } ); //end promise

};

export default send;

