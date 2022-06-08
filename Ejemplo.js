const fs = require('fs');

const inicialPath = 'C:\\Users\\pao03\\Desktop\\Cursos ADYCTO\\FRONT\\Ejercicio_Node\\Carpetas_Fechas\\';
var finalPath;
var Meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var dia;

for (let index = 2017; index < 2023; index=index+1) {
    const element=index;
    finalPath=inicialPath+element;
    fs.mkdirSync(finalPath,(error)=>{
        if (!error) {
            console.log("Se creó la carpeta");
        }else{
            console.log(finalPath);
        }
    });

    for (let i = 0; i < Meses.length; i++) {
        const Mes = Meses[i];
        finalPath=inicialPath+element+'\\'+Mes;
        fs.mkdirSync(finalPath,(error)=>{
            if (!error) {
                console.log("Se creó la carpeta");
            }else{
                console.log(finalPath);
            }
        });

        if (i==0 || i==2 || i==4 || i==6 || i==7 || i==9 || i==11) {
            dia=31;
            
        }else if (i==3 || i==5 || i==8 || i==10) {
            dia=30;
            
        }else{
            if (element%4==0) {
                dia=28;
            }else{
                dia= 27;
            }
        }

        const arr = Array.from({length: dia}, (_, index) => index + 1);

        fs.writeFileSync(finalPath+'\\dia.txt',arr.toString(),(error)=>{
            if (!error) {
                console.log("Se creo el archivo")
            }
        })
    }
}
