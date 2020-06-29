import React, { useState } from 'react';
import PictureSelect from './PictureSelect'

const Page = () => {
    const [value, setValue] = useState(['1']);
    const pictures = [
        {
            id: '1',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '2',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '3',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
    ];

    console.log(value); // 输出用户选择图片 id。

    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};

export default Page;