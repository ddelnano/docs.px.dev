/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';

// const initialCloud = {
//   "name": "Community Cloud",
//   "slug": "https://work.withpixe.ai",
// };
const initialCloud = {
  "name": "Cosmic Cloud",
  "slug": "https://work.getcosmic.ai",
};

export const CloudContext = React.createContext(
  {
    selectedCloud: initialCloud,
    setSelectedCloud: (cloud) => { },
    // setSelectedCloud: (cloud) => {
    //   console.log(cloud);
    //   console.log(selectedCloud);
    //   selectedCloud = cloud;
    // },
  },
);
export default function CloudProvider({ children }) {

  const [selectedCloud, setSelectedCloud] = React.useState(initialCloud);
  // const setSelectedCloud = (cloud) => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };
  return (
    <CloudContext.Provider
      value={{
        selectedCloud,
        setSelectedCloud,
      }}
    >
    {children}
    </CloudContext.Provider>
  );
}
