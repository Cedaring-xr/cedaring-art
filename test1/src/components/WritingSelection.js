import React from 'react';
import styles from '../scss/components/writing.module.scss';

export default function WritingSelection() {
    return (
        <>
            <div className="outer-container">
                <div className='inner-container'>
                    <div className='selection'>
                        <h4 className='tagline'>A Fireside Vision</h4>
                        <p>written by: Bliss Carman</p>
                        {/* <WritingScene />   initially set to closed */}
                        <p>placeholder<br></br>
                        Once I walked the world enchanted
                        Through the scented woods of spring,
                        Hand in hand with Love, in rapture
                        Just to hear a bluebird sing.

                        Now the lonely winds of autumn
                        Moan about my gusty eaves,
                        As I sit beside the fire
                        Listening to the flying leaves.
                
                        As the dying embers settle
                        And the twilight falls apace,
                        Through the gloom I see a vision
                        Full of ardor, full of grace.
                        
                        When the Architect of Beauty
                        Breathed the lyric soul in man,
                        Lo, the being that he fashioned
                        Was of such a mould and plan!
                        
                        Bravely through the deepening shadows
                        Moves that figure half divine,
                        With its tenderness of bearing,
                        With its dignity of line.
                       
                        Eyes more wonderful than evening
                        With the new moon on the hill,
                        Mouth with traces of God's humor
                        In its corners lurking still.
                        
                        Ah, she smiles, in recollection;
                        Lays a hand upon my brow;
                        Rests this head upon Love's bosom!
                        Surely it is April now!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
