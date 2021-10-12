import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"

const Topic = ()=> {
    let {topic} = useParams();

    return (
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, animi! Tempora suscipit voluptatem quisquam officia neque a reiciendis corporis labore nobis, dignissimos recusandae voluptatum! Ab, odit voluptate. Pariatur, cum! Sint.</p>
        </div>
    )
}

const ReactTopics = () => {

    let {path, url} = useRouteMatch();
    
    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                    <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                    <Link to={`${url}/componentes`}>Componentes</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de react</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam molestiae cum nesciunt quae omnis unde incidunt, aspernatur asperiores minima sequi eius blanditiis aliquid, dicta beatae optio iure enim maxime!</p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic}/>
            </Switch>
        </div>
    )
}

export default ReactTopics
