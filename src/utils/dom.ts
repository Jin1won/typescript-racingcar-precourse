type TargetType = Element | Document | null;

const domSelector = (selector: string) => document.querySelector(selector);

function addEventListenerToTarget(
  eventTarget: TargetType,
  type: string,
  listener: (event: Event) => void,
) {
  if (eventTarget == null) return;

  eventTarget.addEventListener(type, listener);
}

export { domSelector, addEventListenerToTarget };
