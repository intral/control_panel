import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css'
import Home from "./Home";
export default class ServiceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: -1,
      uqService: 'null'
    };
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.handleGrid = this.handleGrid.bind(this);
  }
  handleGrid(gr) {
    this.setState({ uqService: gr })
  }
  onSelectionChange = (event) => {
    this.setState({ selected: event.data.id });
  }
  render() {
    const { selected } = this.state;
    const defaultFilterValue = [
      { name: 'name', operator: 'startsWith', type: 'string' },
      { name: 'ver', operator: 'startsWith', type: 'string' }
    ];
    const columns = [
      { name: 'id', header: 'ID', defaultVisible: false },
      { name: 'name', header: 'Имя сервиса' },
      { name: 'ver', header: 'Версия сервиса' },
      { name: 'status', header: 'Статус' },
      { name: 'description', header: 'Описание' },
    ];

    const gridStyle = { minHeight: 550, rowHeight: '100%' }
    //Пока данные не получаю. так как разбираюсь только с реактом 
    const rows = [
      { id: 0, name: 'РЛИС', ver: '1,4', status: 'Все хорошо', description: 'Сервис для лабораторки' },
      { id: 1, name: 'ИСАР', ver: '1,4', status: 'Все хорошо', description: 'Сервис для чего то там' },
      { id: 2, name: 'РЕМД', ver: '1,4', status: 'Все хорошо', description: 'Сервис для РЕМДА' },
      { id: 3, name: 'СМП', ver: '1,4', status: 'Все хорошо', description: 'Сервис для Оборотных талонов' },
      { id: 4, name: 'ЭЦП МО', ver: '1,4', status: 'Все хорошо', description: 'Сервис для подписи ЭЦП МО' },
      { id: 5, name: 'ВИМИС', ver: '1,4', status: 'Все плохо', description: 'Сервис для сбора информации в помойку' },
      { id: 6, name: 'РПН', ver: '1,4', status: 'Бывало и лучше', description: 'Сервис для усложнения жизни остальным сервисам' },
      { id: 7, name: 'РВИМИС', ver: '1,4', status: 'На дне', description: 'Сервис для вобще непонятно дл чего' }
    ];
    return (
      <div>
        <Home />
        <Container fluid>
          <div className="float-end">
            <Stack direction="horizontal" gap={1}>
              <Link className="btn btn-success" to={ "/Service/" + selected}>Открыть панель управления</Link>
              <Button color="success" onClick={e => console.log(this.state.uqService.current.getItemAt(selected).name)}>Обновить</Button>
            </Stack>
            
          </div>
          <h3>ИБИС Сервисы</h3>
          <ReactDataGrid
            theme="default-light"
            idProperty="id"
            columns={columns}
            dataSource={rows}
            handle={this.handleGrid}
            style={gridStyle}
            selected={selected}
            onSelectionChange={this.onSelectionChange}
            defaultFilterValue={defaultFilterValue}
          />
        </Container>
      </div>
    );
  }
}
