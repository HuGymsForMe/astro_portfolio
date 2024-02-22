import { Timeline } from "keep-react";

export const StudiesTimeline = () => {
  return (
    <Timeline className="flex flex-col gap-4">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Bachillerato Científico-Tecnológico</Timeline.Title>
          <Timeline.Time>I.E.S. Aguas Vivas | Septiembre 2020 - Mayo 2022</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Jornalero Agricultor</Timeline.Title>
          <Timeline.Time>I.E.S. Arcipreste de Hita | Septiembre 2022 - Actualidad</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
