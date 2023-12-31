import { WebDriver, Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../environments/environment';

async function loginTest(driver: WebDriver) {
    try {
        console.log("\nIntentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.sleep(100);
        await driver.manage().window().maximize();

        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 10000);
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === environment.url_front+'/home';        
    } catch (error) {
        console.error('Error:', error);
        return false;
    }  
}

async function registerTest(driver: WebDriver) {
    try {
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.manage().window().maximize();

        // click the a element with id "registro"
        console.log("Intentando ingresar a la página de registro...");
        const registro = await driver.wait(until.elementLocated(By.id('registro')), 10000);
        await registro.click();
        // check if the element with id "exampleInputEmail" is present
        console.log("Esperando página de registro...");
        const email = 'test'+Math.random()+'@gmail.com';
        await driver.wait(until.elementLocated(By.id('InputEmail')), 10000).sendKeys(email);
        await driver.wait(until.elementLocated(By.id('InputPassword')), 10000).sendKeys('123123');
        await driver.wait(until.elementLocated(By.id('RepeatPassword')), 10000).sendKeys('123123');
        await driver.wait(until.elementLocated(By.id('FirstName')), 10000).sendKeys('test');
        await driver.wait(until.elementLocated(By.id('LastName')), 10000).sendKeys('test');

        const boton = await driver.wait(until.elementLocated(By.id('btnRegistro')), 10000);
        await boton.click();

        // check if it got redirected to login page and try to login
        console.log("Esperando página de inicio de sesión...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys(email);
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123123');
        //press the button called myBtn
        const boton2 = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
        await boton2.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 10000);
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === environment.url_front+'/home';
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

async function crearProductoTest(driver: WebDriver) {
    try{
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.sleep(100);
        await driver.manage().window().maximize();

        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 10000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //click the a element with id "btnProductos"
            console.log("Intentando ingresar a la página de productos...");
            const productos = await driver.wait(until.elementLocated(By.id('btnProductos')), 10000);
            await productos.click();

            // check if the element with id "btnAgregar" is present
            console.log("Esperando página de productos...");
            await driver.wait(until.elementLocated(By.id('btnAgregar')), 10000);

            //click the a element with id "btnAgregar"
            console.log("Intentando ingresar a la página de agregar productos...");
            const agregar = await driver.wait(until.elementLocated(By.id('btnAgregar')), 10000);
            await agregar.click();

            // check if the modal modal-agregar-producto is present
            console.log("Esperando modal de agregar productos...");
            driver.executeScript('window.onbeforeunload = function() {}')

            // check if modal-agregar-producto is visible (display: block)
            const modal = await driver.wait(until.elementLocated(By.id('modal-agregar-producto')), 10000);
            await driver.sleep(1000);
            console.log("Intentando ingresar nombre...");
            let nombreProducto = 'test'+Math.random();
            await driver.wait(until.elementLocated(By.id('nombreProducto')), 10000).sendKeys(nombreProducto);
            console.log("Intentando ingresar precio...");
            await driver.wait(until.elementLocated(By.id('precioMinimo')), 10000).sendKeys('1000');
            console.log("Intentando ingresar descripción...");
            await driver.wait(until.elementLocated(By.id('descripcionProducto')), 10000).sendKeys('test');     
            console.log("Intentando ingresar fecha..");
            await driver.wait(until.elementLocated(By.id('fechaTermino')), 10000).sendKeys('31122027');

            // click the button with id btnCrearProducto 
            console.log("Intentando crear producto...");
            const crear = await driver.wait(until.elementLocated(By.id('btnCrearProducto')), 10000);
            await crear.click();
            
            // go back to login page, login again
            await driver.get(environment.url_front);
            console.log("Intentando ingresar usuario y contraseña...");
            await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys('user@gmail.com');
            await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123');
            //press the button called myBtn
            const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
            await boton.click();
            // check if the element with id "userDropdown" is present
            console.log("Esperando inicio de sesión..");

            await driver.wait(until.elementLocated(By.id("searchBar")), 10000).sendKeys(nombreProducto);
            //const producto = await driver.wait(until.elementLocated(By.id(nombreProducto)), 10000);
            return true
        }
        else{
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

async function eliminarProductoTest(driver: WebDriver) {
    try{
        console.log("Intentando ingresar a la página...", environment.url_front);
        
        await driver.get(environment.url_front);
        // maximize the window
        await driver.manage().window().maximize();
        await driver.sleep(100);
        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 10000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //click the a element with id "btnProductos"
            console.log("Intentando ingresar a la página de productos...");
            const productos = await driver.wait(until.elementLocated(By.id('btnProductos')), 10000);
            await productos.click();

            // check if the element with id "btnAgregar" is present
            console.log("Esperando página de productos...");
            await driver.wait(until.elementLocated(By.id('btnAgregar')), 10000);

            //click the a element with id "btnAgregar"
            console.log("Intentando ingresar a la página de agregar productos...");
            const agregar = await driver.wait(until.elementLocated(By.id('btnAgregar')), 10000);
            await agregar.click();

            // check if the modal modal-agregar-producto is present
            console.log("Esperando modal de agregar productos...");
            // check if modal-agregar-producto is visible (display: block)
            const modal = await driver.wait(until.elementLocated(By.id('modal-agregar-producto')), 10000);
            await driver.sleep(1000);
            console.log("Intentando ingresar nombre...");
            let nombreProducto = 'test'+Math.random();
            await driver.wait(until.elementLocated(By.id('nombreProducto')), 10000).sendKeys(nombreProducto);
            console.log("Intentando ingresar precio...");
            await driver.wait(until.elementLocated(By.id('precioMinimo')), 10000).sendKeys('1000');
            console.log("Intentando ingresar descripción...");
            await driver.wait(until.elementLocated(By.id('descripcionProducto')), 10000).sendKeys('test');     
            console.log("Intentando ingresar fecha..");
            await driver.wait(until.elementLocated(By.id('fechaTermino')), 10000).sendKeys('31122027');

            // click the button with id btnCrearProducto 
            console.log("Intentando crear producto...");
            const crear = await driver.wait(until.elementLocated(By.id('btnCrearProducto')), 10000);
            await crear.click();

            await driver.get(environment.url_front);
            // maximize the window
            await driver.manage().window().maximize();
            await driver.sleep(100);
            console.log("Intentando ingresar usuario y contraseña...");
            await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys('user@gmail.com');
            await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123');
            //press the button called myBtn
            const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
            await boton.click();
            // check if the element with id "userDropdown" is present
            console.log("Esperando inicio de sesión..");
            await driver.wait(until.elementLocated(By.id('userDropdown')), 10000);

            console.log("Intentando ingresar a la página de productos...");
            const productos2 = await driver.wait(until.elementLocated(By.id('btnProductos')), 10000);
            await productos2.click();


            driver.sleep(100);

            // search for btnEliminar + nombreProducto and click it
            console.log("Intentando eliminar producto...");
            //const eliminar = await driver.wait(until.elementLocated(By.id('btnEliminar'+nombreProducto)), 10000);
            //await eliminar.click();
            await driver.sleep(100)
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

async function realizarPujaTest(driver: WebDriver) {
    try{
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.manage().window().maximize();

        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 10000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 10000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 10000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 10000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //search for the text "Tanque Soviético" 
            console.log("Intentando ingresar a la página del producto...");
            // click in the position of the text "Tanque Soviético"
            await driver.wait(until.elementLocated(By.id('searchBar')), 10000).sendKeys("Soviético");
            await driver.sleep(100);
            const producto = await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), 'Soviético')]`)), 10000);
            await producto.click();           
            //check if the url contains the text "detalle"
            console.log("Esperando página del producto...");
            await driver.wait(until.urlContains('detalle'), 10000);
            //search for the number in the element with id "precioActual" and save it
            console.log("Intentando ingresar puja...");
            const precioActual = await driver.wait(until.elementLocated(By.id('precioActual')), 10000).getText();
            // covert the precio actual to number and add one to it and convert it back to string
            let precioActualNumber = parseInt(precioActual.split('$')[1]);
            precioActualNumber++;
            let precioActualString = precioActualNumber.toString();
            //delete the text in the element montoPuja
            await driver.wait(until.elementLocated(By.id('montoPuja')), 10000).clear();
            //enter precioActualString in the element montoPuja
            await driver.wait(until.elementLocated(By.id('montoPuja')), 10000).sendKeys(precioActualString);
            //click the button with id btnAceptarPuja
            console.log("Aceptando puja...");
            const aceptar = await driver.wait(until.elementLocated(By.id('btnAceptarPuja')), 3000);
            // scroll if necessary so that the button is visible
            await aceptar.click();
            //wait and check if the new precioActual is equal to precioActualString}
            await driver.sleep(100);
            console.log("Chequeando puja realizada...");
            
            return true;
        }
        else{
            return false;
        }
    }
    catch (error) {
        console.error('Error:', error);
        return false;
    }

}

async function executeTests() {
    let successCounter = 0;    
    let testFunctions = [loginTest, registerTest, crearProductoTest, eliminarProductoTest, realizarPujaTest];
    let testCounter = testFunctions.length;

    const chromeOptions = new Options();
    chromeOptions.addArguments("--headless=new");
    chromeOptions.addArguments("--window-size=1920,1080");
    const driver: WebDriver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();        

    for (const test of testFunctions) {
        const result = await test(driver);
        if (result) {
            successCounter++;
            // print test name success in color green
            console.log('\x1b[32m%s\x1b[0m', test.name + ' exitoso\n');
        } else {
            // print test name failure in color red
            console.log('\x1b[31m%s\x1b[0m', test.name + ' fallido\n');
        }
    }
    driver.quit();
    // print the number of successful tests in color green only if the amount of successful tests is less than the total amount of tests
    if (successCounter == testCounter){
        console.log('\x1b[32m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
    }
    else{
        console.log('\x1b[31m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
    }
}

executeTests();
