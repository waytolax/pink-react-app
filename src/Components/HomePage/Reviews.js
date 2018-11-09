import React, {Component} from 'react'
import styled from 'styled-components';
import {SampleNextArrow, SamplePrevArrow, Controls} from '../UI/Controls';
import {media} from '../UI/media';
import Separator from '../UI/Separator';

const StyledReviews = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #000;
    padding: 40px 20px 30px;
    text-align: center;
    position: relative;

    & svg:nth-of-type(1){
        display: none;
        margin: 0 auto;
    }

    & ul{
        min-height: 100px;
        position: relative;
        flex-basis: ${props => props.length ? `${props.length * 1.3}px` : '230px'};
        margin-bottom: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }

    & ul li{
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        transition: ${props => props.animation === 'opacity'
        ? `opacity 0.5s ease-in-out`
        : props.animation === 'all'
        ? `all 0.3s ease-in-out`
        : null };
    }

    & li.prev{
        transform: translateX(-100%);
        opacity: 0;
    }
    & li.current{
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
    }
    & li.next{
        transform: translateX(100%);
        opacity: 0;
    }

    & .author{
        margin-bottom: 15px;
        margin-top: 0;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
    }
    & .info{
        display: none;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
    }
    & .text{
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        margin: 0 0 30px 0;
    }
}

    ${media.tablet`
        & ul{
            min-height: 130px;
            flex-basis: ${props => props.length ? `${props.length * 1.1}px` : '180px'};
        }

        & ul li {
			flex-direction: column-reverse;
		}

        & .author{
            order: 1;
			font-size: 20px;
			margin: 0;
        }
        & .info{
            display: block;
        }
        & .text{
            order: 2;
			margin-bottom: 35px;
			font-size: 18px;
        }
    `}

    ${media.desktop`
        padding: 70px 220px 35px;

        & ul {
			flex-basis: ${props => props.length ? `${props.length * 1.2}px` : '220px'};
			margin-top: 50px;
		}

        & svg:nth-of-type(1){
            display: block;
        }
        & .author{
            font-size: 24px;
        }
        & .info{
            font-size: 18px;
        }
    `}
`;

class ReviewsNew extends Component {

    state ={
        currentReviewId: 1,
        reviews: [
            {
                id: 0,
                author: 'Пушкин',
                info: 'Поэт',
                text: 'У Лукоморья дуб зеленый...',
                position: 'prev'
            },
            {
                id: 1,
                author: 'Николай Петров',
                info: '25 лет, водитель трамвая',
                text: 'Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи! А ещё я познакомился со своей будущей женой в комментариях к выложенной фотографии!',
                position: 'current'
            },
            {
                id: 2,
                author: 'Лермонтов',
                info: 'Поэт',
                text: 'Немного лет тому назад...',
                position: 'next'
            }
        ]
    }

    renderReviews (props) {
        if (props.animation !== 'off') {
            return this.state.reviews.map((review) => {
                return (
                    <li key={review.id} className={review.position} >
                        <h3 className='author'>{review.author}</h3>
                        <p className='info'>{review.info}</p>
                        <p className='text'>{review.text}</p>
                    </li>
                    )
                })
        } else {
            let currentReview = this.state.reviews[this.state.currentReviewId]
                return (
                    <li key={currentReview.id}>
                        <h3 className='author'>{currentReview.author}</h3>
                        <p className='info'>{currentReview.info}</p>
                        <p className='text'>{currentReview.text}</p>
                    </li>
                )
        }
        }

    onNextHandler = () => {
        let arr = this.state.reviews;
        const newCurrentId = (this.state.currentReviewId + 1) % arr.length;

        arr.forEach((review, index) => {
            arr[index].position = 'next'
            arr[this.state.currentReviewId].position = 'prev'
            arr[newCurrentId].position = 'current'
        })

        this.setState((prevState) => {
                return {
                    currentReviewId: (prevState.currentReviewId + 1) % prevState.reviews.length
                }
        })
    }

    onPrevHandler = () => {
        let arr = this.state.reviews;
        let next = this.state.currentReviewId - 1

        if (this.state.currentReviewId === 0) {
            next = this.state.reviews.length - 1
            this.setState({
                currentReviewId: this.state.reviews.length
            });
        }

        arr.forEach((review, index) => {
            arr[index].position = 'prev'
            arr[this.state.currentReviewId].position = 'next'
            arr[next].position = 'current'
        })

        this.setState((prevState) => {
                return {
                    currentReviewId: prevState.currentReviewId - 1
                }
        })
    }

    onChangeHandler = (event) => {
      const id = event.target.id.slice(7) - 1

      this.setState({
          currentReviewId: id
      });
      }

    render () {
        return (
            <StyledReviews
                length={this.state.reviews[this.state.currentReviewId].text.length}
                animation={this.props.animation}
            >
                <h2 className="visually-hidden" tabIndex="0">Отзывы</h2>
                <svg width="79" height="63">
                    <use xlinkHref="#icon-quotes"/>
                </svg>

                <SamplePrevArrow onClick={this.onPrevHandler}/>
                <SampleNextArrow onClick={this.onNextHandler}/>

                <ul>
                    {this.renderReviews(this.props)}
                </ul>
                <Controls type='review' onChange={this.onChangeHandler}/>
                <Separator />
            </StyledReviews>
        )
    }
}

export default ReviewsNew
