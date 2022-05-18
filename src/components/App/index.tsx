import React, { useEffect, useState } from 'react';
import { Header } from '@components';
import {
  // Button,
  Container,
  Form,
} from 'react-bootstrap';

const INPUT_PLACEHOLDER = 'Отсканируйте штрих-код';

export function App() {
  const [barcode, setBarcode] = useState<string>();
  // const [db, setDb] = useState<string | null>(null);
  // const searchedValue = '46902470463891';

  // function onStart() {
  //   alert('start');
  // }

  // function onUpload(event: any): void {
  //   const file = event?.target?.files[0];
  //   const reader = new FileReader();
  //
  //   if (!file) {
  //     return;
  //   }
  //
  //   reader.onload = function (event) {
  //     const contents: any = event?.target?.result;
  //
  //     if (contents) {
  //       setDb(contents);
  //     }
  //   };
  //
  //   reader.readAsText(file);
  // }
  //
  // function onSearch() {
  //   console.log(
  //     db?.split('\n').find((item) => {
  //       return item.includes(searchedValue);
  //     })
  //   );
  // }

  function pasteListener(event: ClipboardEvent) {
    const scannedBarcode = event.clipboardData?.getData('text');

    if (scannedBarcode) {
      setBarcode(scannedBarcode);
    }
  }

  useEffect(() => {
    document.addEventListener('paste', pasteListener);

    return () => {
      document.removeEventListener('paste', pasteListener);
    };
  }, []);

  return (
    <div>
      <Header />
      <Container className="my-4">
        {/*<div className="my-3">*/}
        {/*  <Button onClick={onStart}>Сканировать</Button>*/}
        {/*</div>*/}
        <div>
          <Form.Group
          // onChange={onUpload}
          // controlId="formFileSm"
          >
            {/*<Form.Label>Small file input example</Form.Label>*/}
            <Form.Control
              // readOnly
              disabled
              type="text"
              size="sm"
              placeholder={barcode || INPUT_PLACEHOLDER}
            />
            {/*<Form.Control className="mt-2" type="file" size="sm" />*/}
          </Form.Group>
          {/*<Button variant="secondary" onClick={onUpload}>*/}
          {/*  Загрузить БД*/}
          {/*</Button>*/}
        </div>
        {/*<div className="mt-2">*/}
        {/*  <Button onClick={onSearch}>Поиск</Button>*/}
        {/*</div>*/}
      </Container>
    </div>
  );
}
