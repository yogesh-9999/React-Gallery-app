import React from 'react';
import './CreativeInterests.css';
import { FiUser } from 'react-icons/fi';
import { Scrollbars } from 'react-custom-scrollbars';
import { FiXCircle } from 'react-icons/fi';
import { FiZap } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import MarryHillAvatar from '../../Assets/Avatar/avatar1.jpg';
export default function MyInterests(props) {
  // console.log(props.myInterests);
  let uniqueArray = [];
  if (props.myInterests) {
    uniqueArray = [...new Set(props.myInterests)];
  }

  const DUMMY_DATA_FEATUREDCRETOR = [
    {
      id: 1,
      name: 'Mary R Hill',
      interest: 'Kinetic Art',
      avatar: MarryHillAvatar,
    },
  ];

  return (
    <div className="top-creativeInterests">
      <div className="top-creativeInterest-user">
        <FiUser
          className="Icons"
          style={{
            marginLeft: '-19rem',
            fontSize: '38px',
            border: '1px solid gray',
            backgroundColor: 'lightgray',
            width: '14%',
            height: '38px',
            borderRadius: '25px',
          }}
        />
        <div>
          <h4>Vipul Dubey </h4>
          <p>Robotics</p>
          <h2 style={{ position: 'relative', top: '3px' }}>
            MY CREATIVE INTERESTS
          </h2>
        </div>
        <hr />
      </div>
      {/* <hr /> */}
      <Scrollbars>
        {props.myInterests ? (
          uniqueArray.map((element) => {
            // console.log(element);
            return (
              <div className="choose-creative-interests">
                <h2>{element}</h2>
                <FiXCircle
                  style={{
                    marginTop: '-19%',
                    marginLeft: '80%',
                    fontSize: '2rem',
                  }}
                />
                <FiZap
                  // onClick={props.handleClick}
                  style={{
                    marginTop: '-35%',
                    marginLeft: '60%',
                    fontSize: '2rem',
                  }}
                />
              </div>
            );
          })
        ) : (
          <h2
            style={{
              width: '80%',
              margin: '0 auto',
              color: '#a3a3a3',
              size: '12px',
              lineHeight: '17px',
              fontWeight: '400',
            }}
          >
            Please add your creative interests (minimum 5)
          </h2>
        )}
      </Scrollbars>
      {uniqueArray.length >= 5 && (
        <button
          style={{
            cursor: 'pointer',
            'background-color': 'darkred',
            border: 'none',
            position: 'fixed',
            bottom: '70px',
            right: '170px',
            width: '18%',
          }}
        >
          Home
        </button>
      )}
      {uniqueArray.length < 5 && (
        <button
          style={{
            pointerEvents: 'none',
            border: 'none',
            position: 'fixed',
            bottom: '90px',
            right: '165px',
            width: '18%',
          }}
        >
          Home
        </button>
      )}
    </div>
  );
}
