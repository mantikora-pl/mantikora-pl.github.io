import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
    return <div id={"notFoundContainer"}>
        <h1>404</h1>
        <p>This page doesn't exist</p>
        <Link to={"/"}>Go back </Link>
    </div>
}