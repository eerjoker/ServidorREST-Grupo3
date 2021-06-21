// Antonella Castellano

import PDFDocument  from  'pdfkit'
import  fs  from  'fs'

async function generarPdf(Reserva) {
            
        const  doc  =  new  PDFDocument ;
    
            doc.pipe( fs . createWriteStream ( './'  +  Reserva.nombre+'.pdf' ) ) ;

            doc.font ( 'Times-Roman' )
                .fontSize ( 18 )

            //doc.image ( '../../../../assets/images/Encabezado.png' ) ;

            doc.text ( 'DATOS DE SU RESERVA' ,  {
                align: 'center' ,
                lineGap : 50 ,
                underline: true ,
            } ) ;

            doc.text ( "Nombre del cliente:"  +  Reserva.nombre ,  {  align : 'left' ,  lineGap : 30  } )
            doc.text ( "Dia de reserva:"  +  Reserva.dia ,  {  align : 'left' ,  lineGap : 30  } )
            doc.text ( "Cancha reservada:"  +  Reserva.cancha ,  {  align : 'left' ,  lineGap : 30  } )
            doc.text ( "Cantidad de tiempo reservado:"  +  Reserva.tiempo ,  {  align : 'left' ,  lineGap : 150  } )

            doc.text ( 'Gracias por elegirnos!' ,  {
                align: 'center' ,
                lineGap : 50 ,
            } ) ;

            console.log( 'pdf generado' ) ;

            doc.end ( ) ;
        }


export default generarPdf