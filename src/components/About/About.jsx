import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import Programming from "../../assets/images/programming.png";
import UTN from "../../assets/images/UTN.png";
import TituloUTN from "../../assets/images/TituloUTN.png";
import BA from "../../assets/images/BA.png";
import TituloBA from "../../assets/images/TituloBA.png";


const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <section class="about about--main">
            <div class="about__image">
                <img src={Programming} alt="Persona Programando" />
            </div>
            <div class="about__content">
                <h3 class="about__title">{t("about-title")}</h3>
                <p class="about__description">{t("about-paragraph")}</p>
                <h4 class="about__habilities">{t("about-habilities")}</h4>
                <div class="about__icons">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 128 128"
                    >
                        <path
                            fill="#0acf83"
                            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
                        />
                        <path
                            fill="#a259ff"
                            d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
                        />
                        <path
                            fill="#f24e1e"
                            d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
                        />
                        <path
                            fill="#ff7262"
                            d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                        />
                        <path
                            fill="#1abcfe"
                            d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 128 128"
                    >
                        <path
                            fill="#F34F29"
                            d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128"><path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"/></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 289"><path fill="#539E43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 349"><path fill="#00758F" d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026q12.765-34.188 17.839-74.513h18.71q-12.069 65.65-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525q8.565-.002 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505zM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34q-1.044-50.148-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176q-3.325 42.422-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346z"/><path fill="#F29111" d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485q-7.026 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909m-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816 816 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a898 898 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231q10.066-8.862 25.968-8.862m175.895 1.584v103.788h37.238v14.558h-56.124V199.266zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5zM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69"/><path fill="#00758F" d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554l-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168m46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 149"><path fill="#222" d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332zm140.455-82.307l-29.49 38.821l-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82l32.323 41.82h4.165l-34.322-44.319l31.323-41.32zm16.994 114.963V94.97h.333q3 11.662 11.83 18.744q8.83 7.08 22.492 7.081q8.83 0 15.662-3.582q6.83-3.582 11.413-9.747q4.581-6.165 6.998-14.329t2.416-17.16q0-9.665-2.5-17.828q-2.5-8.165-7.247-14.162q-4.749-6-11.497-9.33q-6.747-3.333-15.245-3.333q-6.498 0-12.079 1.916t-9.913 5.415a36.7 36.7 0 0 0-7.498 8.247q-3.165 4.749-4.832 10.414h-.333V33.322h-3.332v114.963zm34.655-30.657q-15.66 0-25.158-10.746q-9.497-10.746-9.497-30.907q0-8.331 2.333-15.828t6.747-13.162t10.913-8.997t14.662-3.333q8.331 0 14.579 3.333q6.248 3.332 10.33 9.08t6.165 13.162t2.082 15.745q0 7.499-1.916 14.912t-5.915 13.33q-3.997 5.913-10.246 9.663q-6.249 3.748-15.079 3.748m54.816 1.333V70.477q0-6.998 2-13.662q1.998-6.665 6.164-11.746t10.58-7.998t15.245-2.416v-3.332q-7.664-.166-13.412 1.666q-5.749 1.833-9.914 4.999t-6.664 7.414a33.2 33.2 0 0 0-3.666 9.08h-.333v-21.16h-3.332v85.64zm38.154-42.153h71.643q.334-8.83-1.749-16.994q-2.082-8.165-6.664-14.495q-4.582-6.332-11.83-10.164t-17.244-3.832q-7.165 0-13.996 3q-6.831 2.998-11.996 8.746t-8.33 14.08t-3.166 18.993q0 9.497 2.166 17.744t6.664 14.329q4.5 6.081 11.58 9.413q7.08 3.333 17.078 3.166q14.661 0 24.658-8.247t11.83-23.243h-3.332q-2.166 14.163-11.08 21.243q-8.914 7.081-22.41 7.081q-9.163 0-15.495-3.165q-6.33-3.166-10.33-8.664q-3.998-5.499-5.914-12.913q-1.917-7.413-2.083-16.078m68.311-3.332h-68.31q.498-8.997 3.331-16.161q2.833-7.166 7.415-12.246q4.581-5.081 10.663-7.748t13.079-2.666q8.33 0 14.662 3.083q6.33 3.083 10.58 8.414q4.248 5.332 6.414 12.412q2.166 7.082 2.166 14.912m72.477-14.828h3.332q0-14.33-8.33-20.827q-8.332-6.498-22.66-6.498q-7.998 0-13.496 2t-8.997 5.164q-3.498 3.165-4.998 6.998t-1.5 7.331q0 6.997 2.5 11.163q2.499 4.165 7.83 6.498q3.665 1.665 8.331 3q4.665 1.332 10.83 2.831q5.497 1.335 10.83 2.666q5.331 1.334 9.413 3.582q4.083 2.25 6.665 5.749t2.582 9.163q0 5.499-2.582 9.33a20.8 20.8 0 0 1-6.581 6.249q-4 2.415-8.914 3.498q-4.915 1.083-9.58 1.083q-15.162 0-23.243-6.747q-8.08-6.748-8.08-21.244h-3.333q0 16.162 8.747 23.66q8.748 7.497 25.909 7.497q5.497 0 11.08-1.25q5.58-1.249 9.996-4.082a22.6 22.6 0 0 0 7.164-7.33q2.75-4.5 2.75-10.997q0-6.165-2.416-9.997t-6.332-6.331t-8.83-3.915a516 516 0 0 0-9.914-2.75a1727 1727 0 0 0-12.246-3.165q-5.247-1.333-9.746-3.166q-4.332-1.833-6.915-5.248q-2.582-3.416-2.582-9.747q0-1.166.666-4.165q.667-3 3.166-6.082t7.664-5.498t14.162-2.416q6.164 0 11.246 1.333t8.747 4.249t5.665 7.414q2 4.5 2 10.997m77.141 0h3.332q0-14.33-8.33-20.827t-22.66-6.498q-7.997 0-13.495 2q-5.499 1.999-8.997 5.164q-3.5 3.165-4.999 6.998q-1.5 3.833-1.499 7.331q0 6.997 2.5 11.163q2.498 4.165 7.83 6.498q3.666 1.665 8.33 3q4.665 1.332 10.83 2.831q5.499 1.335 10.83 2.666q5.332 1.334 9.414 3.582q4.082 2.25 6.664 5.749q2.583 3.498 2.583 9.163q0 5.499-2.583 9.33a20.8 20.8 0 0 1-6.58 6.249q-4 2.415-8.915 3.498t-9.58 1.083q-15.162 0-23.242-6.747q-8.082-6.748-8.081-21.244h-3.332q0 16.162 8.747 23.66q8.746 7.497 25.908 7.497q5.499 0 11.08-1.25q5.58-1.249 9.997-4.082a22.6 22.6 0 0 0 7.164-7.33q2.75-4.5 2.749-10.997q0-6.165-2.416-9.997t-6.331-6.331t-8.83-3.915a516 516 0 0 0-9.914-2.75a1727 1727 0 0 0-12.246-3.165q-5.249-1.333-9.747-3.166q-4.332-1.833-6.914-5.248q-2.583-3.416-2.583-9.747q0-1.166.667-4.165t3.165-6.082q2.5-3.081 7.664-5.498q5.165-2.415 14.163-2.416q6.164 0 11.246 1.333t8.747 4.249t5.665 7.414q2 4.5 2 10.997"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 135"><path fill="#01EC64" d="M39.689 13.81C34.489 7.64 30.01 1.374 29.096.072a.233.233 0 0 0-.337 0c-.915 1.302-5.393 7.568-10.593 13.738c-44.635 56.926 7.03 95.342 7.03 95.342l.433.29c.385 5.928 1.348 14.46 1.348 14.46h3.852s.963-8.484 1.348-14.46l.434-.338c.048.048 51.712-38.368 7.078-95.294m-10.786 94.475s-2.311-1.977-2.937-2.988v-.097l2.793-61.987c0-.193.289-.193.289 0L31.84 105.2v.097c-.626 1.011-2.937 2.988-2.937 2.988"/><path fill="#001E2B" d="m125.59 95.636l-21.53-52.583l-.047-.145h-16.75v3.534h2.702c.821 0 1.593.34 2.173.92c.579.581.869 1.356.869 2.18l-.483 52.92c0 1.647-1.351 3.002-2.993 3.051l-2.751.048v3.486h16.316v-3.486l-1.69-.048c-1.641-.049-2.993-1.404-2.993-3.05V52.59l23.46 56.456c.338.823 1.11 1.356 1.98 1.356c.868 0 1.64-.533 1.978-1.356l22.93-55.197l.338 48.613c0 1.694-1.352 3.05-3.042 3.098h-1.738v3.486h19.116v-3.486h-2.607c-1.64 0-2.993-1.404-3.04-3.05l-.146-52.922a3.097 3.097 0 0 1 2.993-3.098l2.8-.049v-3.534h-16.316zm150.113 9.004c-.532-.533-.823-1.26-.823-2.134V76.51c0-4.947-1.451-8.828-4.355-11.592c-2.856-2.765-6.824-4.171-11.76-4.171c-6.922 0-12.39 2.813-16.214 8.342c-.048.097-.193.146-.338.146s-.242-.098-.242-.243l-1.791-6.936h-3.001l-7.695 4.414v2.425h1.984c.92 0 1.694.242 2.227.728c.532.485.822 1.212.822 2.23v30.605c0 .873-.29 1.601-.822 2.135c-.533.533-1.259.824-2.13.824h-1.936v3.54h17.713v-3.54h-1.935c-.872 0-1.598-.291-2.13-.824c-.532-.534-.823-1.262-.823-2.135V82.184c0-2.57.581-5.141 1.646-7.664c1.113-2.473 2.758-4.559 4.936-6.16s4.792-2.376 7.792-2.376c3.388 0 5.953 1.067 7.55 3.201s2.42 4.899 2.42 8.197v25.027c0 .873-.29 1.6-.823 2.134s-1.258.824-2.13.824h-1.935v3.541h17.713v-3.54h-1.935c-.726.097-1.404-.194-1.985-.728m161.833-57.773c-4.896-2.607-10.368-3.96-16.273-3.96h-23.04v3.525h2.255c.864 0 1.632.338 2.4 1.11c.72.725 1.104 1.546 1.104 2.415v51.95c0 .87-.383 1.69-1.104 2.415c-.72.724-1.536 1.11-2.4 1.11h-2.256v3.525h23.041c5.905 0 11.377-1.352 16.273-3.96s8.88-6.47 11.76-11.394c2.881-4.924 4.369-10.863 4.369-17.623c0-6.759-1.488-12.65-4.368-17.622c-2.928-5.021-6.865-8.836-11.76-11.491m6.865 29.017c0 6.18-1.104 11.394-3.265 15.595c-2.16 4.2-5.04 7.338-8.592 9.367c-3.552 2.027-7.489 3.041-11.713 3.041h-4.656c-.864 0-1.632-.338-2.4-1.11c-.72-.725-1.104-1.545-1.104-2.414V51.357c0-.87.336-1.641 1.104-2.414c.72-.724 1.536-1.11 2.4-1.11h4.656c4.224 0 8.16 1.013 11.713 3.041s6.432 5.166 8.592 9.367c2.16 4.248 3.265 9.511 3.265 15.643m63.728 3.525c-2.131-2.463-6.244-4.539-11.08-5.65c6.678-3.331 10.11-8.014 10.11-14.05c0-3.282-.867-6.228-2.612-8.738c-1.74-2.51-4.21-4.539-7.353-5.939c-3.148-1.4-6.826-2.124-10.987-2.124h-26.081v3.524h2.08c.871 0 1.646.338 2.42 1.11c.726.725 1.113 1.546 1.113 2.415v51.95c0 .87-.387 1.69-1.113 2.415c-.726.724-1.549 1.11-2.42 1.11h-2.274v3.525h28.31c4.305 0 8.32-.724 11.951-2.173c3.63-1.448 6.533-3.573 8.615-6.373c2.127-2.8 3.192-6.229 3.192-10.188c-.048-4.248-1.307-7.87-3.871-10.814m-32.47 23.416c-.726-.724-1.113-1.545-1.113-2.414V77.09H488q7.11 0 10.886 3.62q3.774 3.622 3.775 9.416c0 2.317-.584 4.587-1.644 6.663c-1.114 2.124-2.763 3.814-4.985 5.118c-2.18 1.303-4.889 1.98-8.032 1.98h-9.923c-.87 0-1.645-.339-2.419-1.063m-1.064-30.707V51.405c0-.869.338-1.641 1.112-2.414c.726-.724 1.549-1.11 2.42-1.11h6.388c4.594 0 7.984 1.159 10.115 3.38c2.126 2.269 3.191 5.166 3.191 8.738c0 3.67-1.017 6.615-2.999 8.836c-1.986 2.172-4.985 3.283-8.952 3.283zM208.27 63.825c-3.698-2.02-7.828-3.08-12.294-3.08c-4.348 0-8.423.959-12.004 2.92l-.289.16c-3.698 2.021-6.627 4.956-8.788 8.661c-2.16 3.705-3.265 8.036-3.265 12.847c0 4.812 1.104 9.143 3.265 12.848s5.09 6.64 8.788 8.66s7.828 3.08 12.293 3.08c4.349 0 8.424-.958 12.004-2.918l.29-.161c3.697-2.021 6.627-4.956 8.788-8.661c2.16-3.705 3.265-8.036 3.265-12.848c0-4.811-1.105-9.142-3.265-12.847s-5.09-6.64-8.788-8.66m3.553 21.508c0 5.919-1.44 10.73-4.322 14.195c-2.833 3.464-6.722 5.244-11.525 5.244c-4.716 0-8.552-1.717-11.372-5.06l-.152-.184c-2.882-3.465-4.323-8.276-4.323-14.195c0-5.81 1.39-10.554 4.167-14.004l.156-.19c2.832-3.464 6.723-5.245 11.524-5.245c4.803 0 8.692 1.78 11.525 5.245c2.882 3.465 4.322 8.276 4.322 14.194m166.631-21.508c-3.698-2.02-7.827-3.08-12.293-3.08c-4.348 0-8.424.959-12.004 2.92l-.29.16c-3.697 2.021-6.626 4.956-8.787 8.661s-3.266 8.036-3.266 12.847c0 4.812 1.105 9.143 3.266 12.848s5.09 6.64 8.788 8.66c3.697 2.021 7.827 3.08 12.293 3.08c4.348 0 8.424-.958 12.004-2.918l.29-.161c3.697-2.021 6.626-4.956 8.787-8.661s3.265-8.036 3.265-12.848c0-4.811-1.104-9.142-3.265-12.847s-5.138-6.64-8.788-8.66m3.554 21.508c0 5.919-1.441 10.73-4.322 14.195c-2.834 3.464-6.723 5.244-11.525 5.244c-4.717 0-8.553-1.717-11.372-5.06l-.153-.184c-2.881-3.465-4.322-8.276-4.322-14.195c0-5.858 1.389-10.556 4.166-14.004l.156-.19c2.833-3.464 6.723-5.245 11.525-5.245s8.691 1.78 11.525 5.245s4.322 8.276 4.322 14.194m-72.186-24.587q-5.804 0-10.592 2.465c-3.192 1.643-5.707 3.867-7.496 6.719a17.04 17.04 0 0 0-2.708 9.281c0 2.997.677 5.752 2.08 8.218c1.353 2.368 3.191 4.35 5.513 5.993l-6.916 9.378c-.87 1.16-.967 2.707-.339 3.964c.677 1.305 1.935 2.078 3.386 2.078h1.983c-1.854 1.251-3.353 2.724-4.411 4.46l-.136.229c-1.257 2.078-1.886 4.254-1.886 6.477c0 4.083 1.773 7.467 5.272 10.013l.193.138c3.58 2.562 8.609 3.867 14.944 3.867c4.401 0 8.609-.725 12.43-2.127c3.758-1.361 6.831-3.362 9.132-5.956l.2-.23c2.37-2.708 3.58-5.995 3.58-9.765c0-3.964-1.451-6.768-4.836-9.474c-2.902-2.272-7.448-3.48-13.107-3.48h-19.344a.14.14 0 0 1-.077-.032l-.02-.017l-.009-.02c-.01-.031-.026-.09.009-.125l5.03-6.767a17.8 17.8 0 0 0 3.724 1.256c1.16.242 2.466.339 3.917.339c4.062 0 7.738-.822 10.93-2.465c3.192-1.644 5.755-3.867 7.593-6.72c1.837-2.803 2.756-5.945 2.756-9.28c0-3.577-1.74-10.103-6.48-13.438c0-.03.017-.041.031-.046l.017-.003l10.398 1.16v-4.785h-16.637c-2.611-.822-5.32-1.305-8.124-1.305m5.803 30.26c-1.838.966-3.82 1.498-5.803 1.498c-3.24 0-6.094-1.16-8.512-3.432s-3.627-5.607-3.627-9.861s1.209-7.59 3.627-9.861s5.271-3.432 8.512-3.432c1.946 0 3.804.444 5.573 1.374l.23.124c1.838.967 3.337 2.466 4.546 4.448c1.16 1.982 1.79 4.447 1.79 7.347c0 2.949-.581 5.414-1.79 7.347c-1.16 1.982-2.708 3.48-4.546 4.447m-13.106 17.788h13.106c3.627 0 5.949.725 7.496 2.272s2.321 3.625 2.321 6.042c0 3.529-1.402 6.43-4.207 8.604c-2.805 2.176-6.577 3.287-11.22 3.287c-4.063 0-7.448-.918-9.915-2.658s-3.723-4.4-3.723-7.783c0-2.127.58-4.109 1.741-5.849c1.16-1.74 2.563-2.997 4.4-3.915"/></svg>
                </div>
                <p className="about__certifications">{t("about-certifications")}</p>
                <div className="about__certifications-container">
                    <div>
                    <img className="about__certifications-UTN" src={UTN} alt="Certificación UTN" />
                    <img className="about__certifications-titiloUTN" src={TituloUTN} alt="Título UTN" />
                    </div>
                    <div>
                    <img className="about__certifications-UTN" src={BA} alt="Certificación UTN" />
                    <img className="about__certifications-titiloUTN" src={TituloBA} alt="Título Buenos Aires multiplica" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;
