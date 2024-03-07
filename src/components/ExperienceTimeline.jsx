import { Timeline } from "keep-react";

export const ExperiencieTimeline = () => {
  return (
    <Timeline className="flex flex-col gap-4">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="italic">Septiembre 2023 - Actualidad</Timeline.Time>
          <Timeline.Title>Conserje-Limpieza | Colegio Salesianos</Timeline.Title>
          <Timeline.Body>Encargado de abrir y cerrar las instalaciones.</Timeline.Body>
          <Timeline.Body>Servicio de mantenimiento y limpieza de la instalaciones.</Timeline.Body>
          <Timeline.Body>Servicio de delegado de campo en horario de partido.</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
            <Timeline.Time className="italic">Julio 2023 - Septiembre 2023 | Julio 2022 - Septiembre 2022 | Julio 2021 - Septiembre 2021</Timeline.Time>
          <Timeline.Title>Jornalero Agricultor</Timeline.Title>
          <Timeline.Body>Obtención y recogida de materias primas</Timeline.Body>
          <Timeline.Body>Envío de las materias primas a sus correspondientes fábricas</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="italic">Marzo 2019 - Junio 2019</Timeline.Time>
          <Timeline.Title>Voluntario | Cruz Roja</Timeline.Title>
          <Timeline.Body>Ayuda y soporte a la educación de niños.</Timeline.Body>
          <Timeline.Body>Juntar enseñanza y diversión para aumentar sus conocimientos.</Timeline.Body>
          <Timeline.Body>Ayuda psicológica para los más pequeños</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
