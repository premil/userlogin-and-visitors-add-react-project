import React from 'react';
import { useSelector } from 'react-redux';


const ViewVisitor = () => {

    const allList = useSelector(state => state.visitorList.lists);
    console.log("allList=>", allList)

     if (!allList) {
         return ('Click the Button First')
     }
    function GetList(lists) {
        return lists && lists.map((index, title, body) => {
            return (
                <div>
                    <ul>
                        <li key={index}>
                            {title}
                            <br />
                            {body}
                        </li>
                    </ul>
                </div>)
        })
    }
    return (
         GetList(allList) 
    );
};

export default ViewVisitor;
