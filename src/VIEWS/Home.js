import React from 'react'
import bg from '../../src/PHONES/bg.jpg'
import '../../src/bootstrap.css'
import './Home.css'

export const Home = () => {
    return (
        <main className="row">
            <main className="col-sm">
            <div className="body">
                    <div className="img">
                    <img src={bg} alt="" />
                    </div>
                        <div className="d-flex push">
                            <p>DIGITAL STORE</p>
                        </div>
                     </div>
            </main>
        </main>
    )
}
