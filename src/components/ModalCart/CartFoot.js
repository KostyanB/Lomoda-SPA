import React from 'react';
import PhoneInput from './PhoneInput';

const CartFoot = ({ total }) => (
    <tfoot>
        <tr>
            <th></th>
            <th>
                <PhoneInput/>
            </th>
            <th></th>
            <th colSpan="2">Итого: {total} &#8381;</th>
            <th></th>
        </tr>
    </tfoot>

)
export default CartFoot;