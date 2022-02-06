import '../App.css';
import React from 'react'
import CoinRow from './CoinRow';

function CryptoTable(props) {
    return (
        <div>
            <table width="100%">
                <tbody>
                    {props.crypto.map(coin =>
                    <CoinRow key = {props.crypto.name} items={coin}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CryptoTable
