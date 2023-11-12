import React, { useReducer } from "react"

import { headerConfig } from "@/config/header"

interface SiteHeaderButtonProps {
  readonly status: "selected" | "not-selected" | "hover"
  readonly text: string
}

function SiteMidHeader() {
  return (
    <div className="h-[57px] w-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full bg-backgroundtertiary" />
      <div className="flex gap-2">
        {headerConfig.midlevel.map((header) => (
          <SiteHeaderButton
            key={header.id}
            status="selected"
            text={header.value}
          />
        ))}

        {/* Search Bar */}
        {/* Wishlist */}
        {/* Cart */}
        {/* Settings */}
      </div>
    </div>
  )
}

function SiteHeaderButton({ status, text = "Home" }: SiteHeaderButtonProps) {
  const [state, dispatch] = useReducer(reducer, {
    status: status || "not-selected",
  })

  let backgroundColor = "bg-backgroundtertiary"
  if (state.status === "hover") {
    backgroundColor = "bg-variable-collection-hover-layer"
  } else if (state.status === "selected") {
    backgroundColor = "bg-colorsecondary"
  }

  return (
    <button
      className={`relative inline-flex items-center justify-center gap-[10px] overflow-hidden rounded-[3px] px-[29px] py-[13px] ${backgroundColor}`}
      onMouseEnter={() => {
        dispatch("mouse_enter")
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave")
      }}
      onClick={() => {
        dispatch("click")
      }}
    >
      <div className="font-body-large relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--body-large-font-size)] font-[number:var(--body-large-font-weight)] leading-[var(--body-large-line-height)] tracking-[var(--body-large-letter-spacing)] text-textmain [font-style:var(--body-large-font-style)]">
        {text}
      </div>
    </button>
  )
}

type State = {
  status: "not-selected" | "hover" | "selected"
}

type Action = "mouse_enter" | "mouse_leave" | "click"

const stateTransitions: Record<
  State["status"],
  Partial<Record<Action, State["status"]>>
> = {
  "not-selected": {
    mouse_enter: "hover",
  },
  hover: {
    mouse_leave: "not-selected",
    click: "selected",
  },
  selected: {
    click: "not-selected",
  },
}

function reducer(state: State, action: Action): State {
  return {
    status: stateTransitions[state.status]?.[action] ?? state.status,
  }
}

export default SiteMidHeader
