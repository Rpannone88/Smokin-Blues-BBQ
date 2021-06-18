import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useForm } from 'react-hook-form';

export default function AboutMe({ openAbout }) {
  if(!openAbout) return null;
  return ReactDom.createPortal(
    <>
    <div>
      <div className="about-me-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet gravida velit, vel vehicula elit. In hac habitasse platea dictumst. Curabitur sapien massa, tincidunt vel est a, rutrum imperdiet sem. Etiam volutpat tortor et sem tristique, id ultrices erat rhoncus. Suspendisse ultricies ultricies lorem, in placerat magna imperdiet non. Suspendisse potenti. Aenean suscipit massa sit amet elit pretium gravida. Sed sodales sed enim non condimentum. Sed fringilla finibus pretium. Proin placerat lorem pulvinar, lacinia diam sit amet, gravida elit. Donec porta metus a lacus suscipit, eu placerat libero tristique. Sed nisi nulla, sodales quis diam et, vestibulum pulvinar felis. Vivamus commodo felis ipsum, vitae mollis orci aliquam in. In tempor pulvinar imperdiet.</div>
    </div>
    </>,
    document.getElementById('portal')
  )
};
