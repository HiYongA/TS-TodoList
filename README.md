1. 학습개요 : 리액트 숙련주차 과제(Lv2), ‘TodoList’를 TS로 작성합니다.
2. 구현방법
    1. Lv1 구현 과정과 동일합니다.
    2. react-router-dom, redux, styled-components 등 많은 요소가 들어가기 때문에 다음 사항을 고려해야합니다.
        - 고려할사항
            - 타입정의
                - react-router-dom: react-router-dom의 타입 정의는 **`@types/react-router-dom`** 패키지를 통해 제공됩니다. 이 패키지를 설치하여 사용하는 컴포넌트들에 대한 타입을 정의하고, React Router의 기능을 TypeScript와 함께 사용할 수 있도록 해야 합니다.
                - Redux: Redux 라이브러리 또한 타입 정의를 제공하며, **`@types/react-redux`** 패키지를 설치하여 리덕스와 관련된 타입들을 정의해야 합니다.
            - Props와 상태(state)의 타입화
                - 리액트 컴포넌트의 Props와 상태(State)에 대한 타입을 명확하게 정의해야 합니다.
                - 이를 통해 타입 에러를 사전에 방지하고 개발자들이 올바른 타입의 데이터를 전달하도록 유도할 수 있습니다.
            - Redux 상태 관리
                - 리덕스를 사용할 때 Redux Store의 상태(State)와 액션(Action)에 대한 타입을 잘 정의해야 합니다.
                - **`redux`**와 **`react-redux`** 라이브러리를 이용하여 스토어를 생성하고 연결할 때, 타입 에러가 발생하지 않도록 해야 합니다.
            - useSelector, useDispatch 사용
                - Redux 관련 Hooks인 **`useSelector`**과 **`useDispatch`**를 사용할 때, 상태 및 액션의 타입을 정확히 지정해야 합니다.
                - 특히, **`useSelector`**를 사용하여 상태를 가져올 때 반환되는 값의 타입을 명시해야 합니다.
