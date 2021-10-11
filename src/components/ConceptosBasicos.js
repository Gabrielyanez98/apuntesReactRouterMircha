import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Productos from '../pages/Productos'
import Usuario from '../pages/Usuario'
import MenuConceptos from './MenuConceptos'

const ConceptosBasicos = () => {
    return (
        <div>
            
            <h2>Conceptos básicos</h2>
            
            <Router>
            <MenuConceptos/>
                <Switch>

                    <Route exact path="/" component ={Home}/>
                    <Route exact path="/acerca" component ={Acerca}/>
                    <Route exact path="/contacto" component ={Contacto}/>
                    <Route exact path="/usuario/:username" component ={Usuario}/>
                    <Route exact path="/productos" component ={Productos}/>
                    <Route exact path="/about"><Redirect to="/acerca"/></Route>
                    <Route exact path="/contact"><Redirect to="/contacto"/></Route>
                    <Route exact path="/react" component ={Contacto}/>
                    <Route path="*" component ={Error404}/>
                    
                </Switch>

            </Router>
        </div>
    )
}

/* const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Conceptos básicos</h2>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>Bienvenid@s al tema de las rutas en React</p>
                    </Route>

                    <Route exact path="/acerca">
                    <Acerca/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consectetur. Magnam eum animi cum autem earum dolor, natus eius molestiae ex exercitationem, repellendus recusandae dicta! Ducimus architecto alias maxime blanditiis.</p>
                    </Route>

                    <Route exact path="/contacto" component={Contacto} /> 
                    <Route exact path="/contacto" children={<><Contacto/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium expedita nihil repellat possimus ea nostrum? Obcaecati omnis laudantium alias tempora at modi explicabo reiciendis officiis! Necessitatibus, labore? Molestiae, facilis.</p></> } />

                </Switch>

            </Router>
        </div>
    )
} */

export default ConceptosBasicos
