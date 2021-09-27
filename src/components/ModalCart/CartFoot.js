import React from 'react';
import PhoneInput from './PhoneInput';

const CartFoot = ({ total, input, chekPhone }) => (
    <tfoot>
        <tr>
            <th></th>
            <th>
                <PhoneInput input={input} chekPhone={chekPhone}/>
            </th>
            <th></th>
            <th colSpan="2">Итого: {total} &#8381;</th>
            <th></th>
        </tr>
    </tfoot>

)
export default CartFoot;