import Image from "next/image"
import Link from "next/link"
const loadingIcon= "/images/icons/loading.svg"

const LinkWrap = ({ link, children, fullWidth, pill, classNames, mini }) => {
  const classBase =
    " transition duration-300 inline-block text-sm " +
    (mini ? "py-0.5 px-4 sm:px-6 " : "py-1.5 px-4 sm:px-10 ")

  if (link) {
    return (
      <Link
        href={link}
        className={
          (fullWidth ? "w-full " : " ") +
          (pill ? "rounded-full " : mini ? "rounded-lg" : "rounded-md") +
          classBase +
          classNames
        }
      >
        {children}
      </Link>
    )
  } else {
    return (
      <div
        className={
          (fullWidth ? "w-full " : " ") +
          (pill ? "rounded-full" : "rounded-md") +
          classBase +
          classNames
        }
      >
        {children}
      </div>
    )
  }
}

export const Button = ({
  children,
  link,
  loading = false,
  type = "primary",
  fullWidth = false,
  onClick,
  mini,
  warning = false,
  warningType = 0,
  className = "",
  pill = false,
}) => {
  const classNames = {
    primary:
      "bg-primary hover:bg-primaryHover text-background font-semibold border-2 border-primary hover:border-primaryHover",
    secondary: "text-primary border-2 border-primary font-semibold",
    solid: "border-2 border-casper bg-casper font-semibold",
    active: "bg-primary text-secondary border-2 border-secondary",
    danger: "bg-error text-white border-2 border-error",
    success: "bg-success text-white border-2 border-success",
    warning: "bg-warning text-black font-semibold",
    deactive: "bg-helper border-2 border-helper",
    cancel: "text-helper",
    transparent: "",
  }

  return (
    <>
      <button
        className={
          "inline-block transition duration-300 " +
          (fullWidth ? "w-full " : "") +
          className
        }
        onClick={onClick}
      >
        <LinkWrap
          link={link}
          classNames={classNames[type]}
          fullWidth={fullWidth}
          pill={pill}
          mini={mini}
        >
          <div className="py-0.5">
            {loading ? (
              <div className="w-full flex justify-center items-center">
                <Image src={loadingIcon} className="h-7" alt="loading" />
              </div>
            ) : (
              children
            )}
          </div>
        </LinkWrap>
      </button>
      {warning && (
        <p
          className={
            " mt-2 transition duration-400 max-w-fit ease-in-out text-xs text-center " +
            (warningType ? "text-success" : "text-error")
          }
        >
          {warning}
        </p>
      )}
    </>
  )
}

